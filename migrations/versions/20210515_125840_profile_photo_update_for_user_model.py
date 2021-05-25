"""profile photo update for user model

Revision ID: 8dd8b3c41e8d
Revises: d2767f1c8410
Create Date: 2021-05-15 12:58:40.168510

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8dd8b3c41e8d'
down_revision = 'd2767f1c8410'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('profile_photo', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'profile_photo')
    # ### end Alembic commands ###
