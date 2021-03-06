"""update event model and user model

Revision ID: d2767f1c8410
Revises: a3117c27392c
Create Date: 2021-05-14 14:45:38.440476

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd2767f1c8410'
down_revision = 'a3117c27392c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('events', sa.Column('address', sa.String(), nullable=True))
    op.add_column('events', sa.Column('description', sa.String(), nullable=True))
    op.add_column('events', sa.Column('eventType', sa.String(), nullable=True))
    op.add_column('events', sa.Column('musicType', sa.String(), nullable=True))
    op.add_column('events', sa.Column('price', sa.Integer(), nullable=True))
    op.add_column('events', sa.Column('size', sa.Integer(), nullable=True))
    op.add_column('events', sa.Column('venuePhoto', sa.String(), nullable=True))
    op.add_column('events', sa.Column('venueType', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('events', 'venueType')
    op.drop_column('events', 'venuePhoto')
    op.drop_column('events', 'size')
    op.drop_column('events', 'price')
    op.drop_column('events', 'musicType')
    op.drop_column('events', 'eventType')
    op.drop_column('events', 'description')
    op.drop_column('events', 'address')
    # ### end Alembic commands ###
