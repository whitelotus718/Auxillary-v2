from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():
    #hosts
    host1 = User(username='Haj', email='haj@gmail.com', password='password', profile_photo="https://i.ibb.co/qmDdsKX/Haj-profile.jpg")
    demo = User(username='Demo', email='demo@aa.io', password='password', profile_photo="https://i.ibb.co/hdbqzZ3/MR-ROBOT-eps2-7-init-5-fve-Episode-209-Pictured-Rami-Malek-as-Elliot-Alderson-Photo-by-Michael-Parme.jpg")

    #artists
    demoArtist1 = User(username='Zhu', artist_name="Zhu", email='zhu@gmail.com', password='password', profile_photo="https://i.ibb.co/4ZgRbNV/Zhu-profile.jpg")
    demoArtist2 = User(username='Tchami', artist_name="Tchami", email='tchami@gmail.com', password='password', profile_photo="https://i.ibb.co/MCVQxGC/Tchami-profile.jpg")
    demoArtist3 = User(username='Griz', artist_name="Griz", email='griz@gmail.com', password='password', profile_photo="https://i.ibb.co/x5hzyFk/Griz-profile.jpg")
    demoArtist4 = User(username='Deadmau5', artist_name="deadmau5", email='deadmau5@gmail.com', password='password', profile_photo="https://i.ibb.co/PzYHT6T/deadmau5-profile.jpg")


    db.session.add_all([host1, demo, demoArtist1, demoArtist2, demoArtist3, demoArtist4])

    db.session.commit()

    return [host1, demo, demoArtist1, demoArtist2, demoArtist3, demoArtist4]

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
