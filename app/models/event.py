from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    eventType = db.Column(db.String)
    venueType = db.Column(db.String)
    venuePhoto = db.Column(db.String)
    musicType = db.Column(db.String)
    address = db.Column(db.String)
    size = db.Column(db.Integer)
    price = db.Column(db.Integer)
    description = db.Column(db.String)

    ownerId = db.Column(db.Integer, db.ForeignKey("users.id"))

    def to_dict(self):
        return {
          "id": self.id,
          "ownerId": self.ownerId,
          "title": self.title,
          "eventType": self.eventType,
          "venueType": self.venueType,
          "venuePhoto": self.venuePhoto,
          "musicType": self.musicType,
          "address": self.address,
          "size": self.size,
          "price": self.price,
          "description": self.description,
          "bids": [bid.to_dict() for bid in self.bids],
        }

    # associations
    host = db.relationship('User', back_populates='events')
    bids = db.relationship("Bid", back_populates='event')
