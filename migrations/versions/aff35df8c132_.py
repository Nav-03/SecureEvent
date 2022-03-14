"""empty message

Revision ID: aff35df8c132
Revises: 9a6a0ead4583
Create Date: 2022-03-14 11:37:18.024747

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'aff35df8c132'
down_revision = '9a6a0ead4583'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('permission', sa.Column('vip', sa.Boolean(), nullable=False))
    op.add_column('permission', sa.Column('valet', sa.Boolean(), nullable=False))
    op.add_column('permission', sa.Column('dinner', sa.Boolean(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('permission', 'dinner')
    op.drop_column('permission', 'valet')
    op.drop_column('permission', 'vip')
    # ### end Alembic commands ###
