"""updated ownerId

Revision ID: a3117c27392c
Revises: dcc9e8e47fe7
Create Date: 2021-05-11 16:15:46.556438

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a3117c27392c'
down_revision = 'dcc9e8e47fe7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('bids', sa.Column('ownerId', sa.Integer(), nullable=True))
    op.drop_constraint('bids_artistId_fkey', 'bids', type_='foreignkey')
    op.create_foreign_key(None, 'bids', 'users', ['ownerId'], ['id'])
    op.drop_column('bids', 'artistId')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('bids', sa.Column('artistId', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'bids', type_='foreignkey')
    op.create_foreign_key('bids_artistId_fkey', 'bids', 'users', ['artistId'], ['id'])
    op.drop_column('bids', 'ownerId')
    # ### end Alembic commands ###
