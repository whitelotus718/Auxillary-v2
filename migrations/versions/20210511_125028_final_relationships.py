"""final relationships

Revision ID: dcc9e8e47fe7
Revises: 518dccb432ed
Create Date: 2021-05-11 12:50:28.672205

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dcc9e8e47fe7'
down_revision = '518dccb432ed'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('bids', sa.Column('artistId', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'bids', 'users', ['artistId'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'bids', type_='foreignkey')
    op.drop_column('bids', 'artistId')
    # ### end Alembic commands ###