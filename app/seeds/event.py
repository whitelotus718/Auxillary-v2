from werkzeug.security import generate_password_hash
from app.models import db, Event

# Adds a demo user, you can add other users here if you want
def seed_events():  #(user)
    event1 = Event(
        ownerId=1,
        title="27th Birthday Party", 
        eventType='Party',
        venueType='Rooftop',
        venuePhoto='https://i.ibb.co/9cN7hKg/Haj-venue.jpg',
        musicType='House',
        address='210 East 95th Street New York, NY 10128',
        size=125,
        price=1000,
        description='Gathering friends and family to celebrate 27 rotations around the sun.',
        )
    event2 = Event(
        ownerId=1,
        title="Summer Marriage Ceremony", 
        eventType='Wedding',
        venueType='Garden',
        venuePhoto='https://i.ibb.co/9NPjXNr/event-wedding.jpg',
        musicType='Ambient',
        address='210 East 95th Street New York, NY 10128',
        size=200,
        price=1500,
        description='Welcoming those dearest to me to celebrate tying the knot!',
        )
    event3 = Event(
        ownerId=1,
        title="Corporate Drinks", 
        eventType='Corporate',
        venueType='Hotel',
        venuePhoto='https://i.ibb.co/r3pXtVL/event-corporate.png',
        musicType='Top 100',
        address='310 W Broadway, New York, NY 10013',
        size=300,
        price=8000,
        description='Large corporate event happy hour into the night to celebrate our merger!',
        )
    event4 = Event(
        ownerId=1,
        title="Electric Friday", 
        eventType='Bar Event',
        venueType='Bar',
        venuePhoto='https://i.ibb.co/7z9BQr4/event-bar.jpg',
        musicType='Electronic',
        address='Bowery Electric',
        size=150,
        price=2500,
        description='Join us for our electric Friday! Every Friday this summer.',
        )

    # eventThree = Event(title="Event Two", ownerId=user.id)

    db.session.add_all([event1, event2, event3, event4])

    db.session.commit()

    return [event1, event2, event3, event4]

# Uses a raw SQL query to TRUNCATE the events table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
