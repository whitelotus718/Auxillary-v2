from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Event


class EventForm(FlaskForm):
    # ownerId = IntegerField('ownerId', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    eventType = StringField('eventType', validators=[DataRequired()])
    venueType = StringField('venueType', validators=[DataRequired()])
    venuePhoto = StringField('venuePhoto', validators=[DataRequired()])
    musicType = StringField('musicType', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    size = IntegerField('size', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
