from flask_wtf import FlaskForm
from wtforms import IntegerField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Bid


class BidForm(FlaskForm):
    ownerId = IntegerField('ownerId')
    eventId = IntegerField('eventId')
    isAccepted = BooleanField('isAccepted')