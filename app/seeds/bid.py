from werkzeug.security import generate_password_hash
from app.models import db, Bid
from app.seeds.users import seed_users
# Adds a demo user, you can add other users here if you want

# [u_one, u_two, u_three, u_four, u_five, u_six] = seed_users()

def seed_bid(): # (user, event)

    bidOne = Bid(isAccepted=False, ownerId=2, eventId=1)
    bidTwo = Bid(isAccepted=False, ownerId=3, eventId=1)
    bidThree = Bid(isAccepted=False, ownerId=4, eventId=1)
    bidFour = Bid(isAccepted=False, ownerId=5, eventId=1)
    
    bidFive = Bid(isAccepted=False, ownerId=2, eventId=2)
    bidSix = Bid(isAccepted=False, ownerId=3, eventId=2)
    bidSeven = Bid(isAccepted=False, ownerId=4, eventId=3)
    bidEight = Bid(isAccepted=False, ownerId=5, eventId=3)

    bidNine = Bid(isAccepted=False, ownerId=2, eventId=3)
    bidTen = Bid(isAccepted=False, ownerId=3, eventId=4)
    bidEleven = Bid(isAccepted=False, ownerId=4, eventId=4)
    bidTwelve = Bid(isAccepted=False, ownerId=5, eventId=4)


    allBids = [bidOne, bidTwo, bidThree, bidFour, bidFive, bidSix, bidSeven, bidEight, bidNine, bidTen, bidEleven, bidTwelve]

    db.session.add_all(allBids)


    db.session.commit()

    return allBids

# Uses a raw SQL query to TRUNCATE the bid table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_bid():
    db.session.execute('TRUNCATE bids RESTART IDENTITY CASCADE;')
    db.session.commit()
