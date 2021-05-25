from .db import db


class Bid(db.Model):
    __tablename__ = 'bids'

    id = db.Column(db.Integer, primary_key=True)
    isAccepted = db.Column(db.Boolean)

    ownerId = db.Column(db.Integer, db.ForeignKey("users.id")) #references __tablename__
    eventId = db.Column(db.Integer, db.ForeignKey("events.id"))
    # owner = db.relationship("User", backref="events")

    #associations
    # bidEvent = db.relationship("Event", back_populates="eventBid", uselist=False)
    artist = db.relationship("User", back_populates="bids", uselist=False, cascade="all,delete")

    def to_dict(self):
        return {
            "id": self.id,
            "ownerId": self.ownerId,
            "eventId": self.eventId,
            "isAccepted": self.isAccepted,
            # "user": self.user.to_dict()    *I get a max recursion error when I include this*
            # "user": self.user
            "artist": {
                "id": self.artist.id,
                "username": self.artist.username,
                "email": self.artist.email,
                "artist_name": self.artist.artist_name,
                "profile_photo": self.artist.profile_photo,
                }
            }

    # user = db.relationship('User', back_populates='bids', uselist=False)
    event = db.relationship('Event', back_populates='bids')