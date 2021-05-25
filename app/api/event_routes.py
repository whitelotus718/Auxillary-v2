from app.forms.event_form import EventForm
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Event, Bid, db, User
from app.forms import EventForm

event_routes = Blueprint('events', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

# GET current_user obj
@event_routes.route('/user', methods=["GET"])
@login_required
def events_user():
    # return current user
    print("I MADE IT INTO THIS USER ROUTE!!!!!!!")
    user = User.query.get(current_user.id)
    return {"user": user.to_dict()}
    # return {'errors': ['Unauthorized']}
    # return {"user": current_user.to_dict()}


# GET all events
@event_routes.route('/', methods=["GET"])
@login_required
def events():
    events = Event.query.all()
    # console.log(events)
    return {"events": [event.to_dict() for event in events]}

#GET a single event & all bids on that event
@event_routes.route('/<int:id>')
@login_required
def event(id):
    event = Event.query.get(id)
    bids = Bid.query.filter(Bid.eventId == id)
    users = User.query.all()
    # console.log(event)
    return {'bids': [bid.to_dict() for bid in bids],
            'event': event.to_dict(),
            'users': [user.to_dict() for user in users],
            }


#GET ALL BIDS on Single event
@event_routes.route('/<int:id>/bids')
@login_required
def event_bids(id):
    bids = Bid.query.filter(Bid.eventId == id)
    # console.log(event)
    return {'bids': [bid.to_dict() for bid in bids]}


#DELETE a single Bid on single event
# @event_routes.route('/<int:id>/bids', methods=["DELETE"])
# @login_required
# def event_bids_delete(id):
#     bids = Bid.query.filter(Bid.eventId == id)

#     # console.log(event)

#     return {'bids': [bid.to_dict() for bid in bids]}

#POST a single event
@event_routes.route('/', methods=["POST"])
@login_required
def post_event():
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # user = User.query.get(current_user.id)
    print(form.data, "FORM DATA!!!!!")
    print("WE'RE IN THE ROUTE!!!!!")
    print(current_user, current_user.id, "Current User ID!!!")
    print(request, "REQUEST!!!!")
    if form.validate_on_submit():
        # i think form is NOT validating on submit.. why?
        event = Event(
            ownerId=current_user.id,
            title=form.data['title'],
            eventType=form.data['eventType'],
            venueType=form.data['venueType'],
            venuePhoto=form.data['venuePhoto'],
            musicType=form.data['musicType'],
            address=form.data['address'],
            size=form.data['size'],
            price=form.data['price'],
            description=form.data['description'],
        )
        print(event, "EVENT!")
        db.session.add(event)
        db.session.commit()
        return event.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# DELETE a specific event
@event_routes.route('/<int:id>', methods=['DELETE'])
# @login_required
def delete_event(id):
    event = Event.query.get(id)
    db.session.delete(event)
    db.session.commit()
    return {'message': 'success'}
