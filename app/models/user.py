from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    artist_name = db.Column(db.String)
    profile_photo = db.Column(db.String)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
          "id": self.id,
          "username": self.username,
          "email": self.email,
          "artist_name": self.artist_name,
          "profile_photo": self.profile_photo,
          "events": [e.to_dict() for e in self.events],
          "bids": [b.to_dict() for b in self.bids]
        }

    # associations
    events = db.relationship("Event", back_populates='host', cascade='all, delete') #backref='owner'
    bids = db.relationship("Bid", back_populates='artist', cascade='all, delete')  #  recent: | back_populates='users', backref='author', 
