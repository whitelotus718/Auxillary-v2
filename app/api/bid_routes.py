from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Bid, db, user
from app.forms import BidForm
from app.forms.bid_form import BidForm

bid_routes = Blueprint('bids', __name__)

# validations
def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages

@bid_routes.route('/', methods=["POST"])
@login_required
def post_bid():
    form = BidForm()
    print(form, "FORM! !")
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        bid = Bid(
            ownerId=current_user.id,
            eventId=form.data['eventId'],
            isAccepted=False,
            # user=current_user
        )
        db.session.add(bid)
        db.session.commit()
        return bid.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


