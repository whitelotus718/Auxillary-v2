from flask.cli import AppGroup
from .users import seed_users, undo_users
from .bid import seed_bid, undo_bid
from .event import seed_events, undo_events

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_events()
    seed_bid()

    # users = seed_users()
    # bids = seed_bid()
    
    # [user, artist, artistTwo] = seed_users()
    # events = []
    # bids = []
    # for b in bids:
    #     for u in users:
    #         if b.ownerId == u.id:
    #             u.bids.append(b)

# Senyos attempt at ? direct backref relations to go bid.author.artist_name
    #     events.extend(seed_events(u))
    # for event in events:
    #     for u in [user, artist, artistTwo]:
    #         bids.extend(seed_bid(u, event))
    # bids = seed_bid(artist, events[0])
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # Add other undo functions here
    undo_bid()
    undo_events()
    undo_users()
