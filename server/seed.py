from app import app

from models import db, Cart, Customer, Store, Item, Checkout

from random import choice as rc

from faker import Faker

with app.app_context():

    Item.query.delete()
    Customer.query.delete()
    Store.query.delete()
    Cart.query.delete()
    Checkout.query.delete()

    db.session.commit()


    fake = Faker()

    def seed_items():
            items = [
            Item(
                name="Apex Legends",
                type="Action",
                description="Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.",
                quantity=20,
                price=30,
                img='https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/champion-edition/apex-champion-edittion-featured-image.jpg.adapt.crop191x100.628p.jpg',
                store_id= 1,
            ),
            Item(
                name="Dead by Daylight",
                type="Horror",
                description="Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
                quantity=20,
                price=20,
                img='https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7',
                store_id= 1,
            ),
            Item(
                name="ELDEN RING",
                type="Action",
                description="THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
                quantity=20,
                price=60,
                img='https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png',
                store_id= 1,
            ),
            Item(
                name="Resident Evil 4",
                type="Horror",
                description="Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, where there is something terribly wrong with the locals.",
                quantity=20,
                price=60,
                img='https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png',
                store_id= 1,
            ),
            Item(
                name="Resident Evil 3",
                type="Horror",
                description="Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed. To stop her, Umbrella unleashes their ultimate secret weapon: Nemesis! Also includes Resident Evil Resistance, a new 1 vs 4 online multiplayer game set in the Resident Evil universe.",
                quantity=20,
                price=40,
                img='https://image.api.playstation.com/vulcan/ap/rnd/202206/0206/WmriZBRlSeXWEEDLJOWW7MdW.png',
                store_id= 1,
            ),
            Item(
                name="Resident Evil 2",
                type="Horror",
                description="A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh eating zombies roam the streets for survivors. An unparalleled adrenaline rush, gripping storyline, and unimaginable horrors await you. Witness the return of Resident Evil 2.",
                quantity=20,
                price=40,
                img='https://cdn.cloudflare.steamstatic.com/steam/apps/883710/capsule_616x353.jpg?t=1692001351',
                store_id= 1,
            ),
            Item(
                name="Overwatch® 2",
                type="FPS",
                description="Overwatch 2 is a critically acclaimed, team-based shooter game set in an optimistic future with an evolving roster of heroes. Team up with friends and jump in today.",
                quantity=20,
                price=40,
                img='https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Overwatch2_Season6.png',
                store_id= 1,
            ),
            Item(
                name = 'Mortal Kombat 1',
                type = 'Fighting',
                description = 'Discover a reborn Mortal Kombat™ Universe created by the Fire God Liu Kang. Mortal Kombat™ 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities',
                quantity = 20,
                price = 60,
                img = 'https://upload.wikimedia.org/wikipedia/en/5/5b/Mortal_Kombat_1_key_art.jpeg',
                store_id = 1
            ),
            Item(
                name = 'SoulCalibur VI',
                type = 'Fighting',
                description = 'Bring more than your fists to the fight! Featuring all-new battle mechanics and characters, SOULCALIBUR VI marks a new era of the historic franchise. Welcome back to the stage of history!',
                quantity = 20,
                price = 60,
                img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/544750/capsule_616x353.jpg?t=1646956219',
                store_id = 1
            ),
            Item(
                name = 'Hogwarts Legacy',
                type = 'Adventure',
                description = 'Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.',
                quantity = 20,
                price = 60,
                img = 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000014724/72ce0a17215521a167c3da579db4cc48a2f7a52eacc81ad985ba20fd6817fdc2',
                store_id = 1
            ),
            Item(
                name = 'Dragon Quest XI S: Echoes of an Elusive Age',
                type = 'RPG',
                description = 'The Definitive Edition includes the critically acclaimed DRAGON QUEST XI, plus additional scenarios, orchestral soundtrack, 2D mode and more! Whether you are a longtime fan or a new adventurer, this is the ultimate DQXI experience.',
                quantity = 20,
                price = 40,
                img = 'https://image.api.playstation.com/vulcan/ap/rnd/202007/1607/7PxHVp3tCaQQkVeHalUtPcND.png',
                store_id = 1
            ),
            Item(
                name = 'Monster Hunter: Rise',
                type = 'RPG',
                description = 'Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you’ll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline.',
                quantity = 20,
                price = 40,
                img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpM_DJjXMJbmnv5G--AWUwQQB7Zk882uUew&usqp=CAU',
                store_id = 1,
            ),
            Item(
                name = 'Madden NFL 24',
                type = 'Sports',
                description = 'Experience the newest iteration of FieldSENSE™ in Madden NFL 24. More realistic character movement and smarter AI gives you control to play out your gameplay strategy with the confidence to dominate any opponent.',
                quantity = 20,
                price = 70,
                img = 'https://image.api.playstation.com/vulcan/ap/rnd/202307/1222/609e9a7cba2efa5084585bbc4d6da809d3d444e6da87612c.jpg',
                store_id = 1,
            ),
            Item(
                name = 'Madden NFL 24',
                type = 'Sports',
                description = 'Experience the newest iteration of FieldSENSE™ in Madden NFL 24. More realistic character movement and smarter AI gives you control to play out your gameplay strategy with the confidence to dominate any opponent.',
                quantity = 20,
                price = 70,
                img = 'https://image.api.playstation.com/vulcan/ap/rnd/202307/1222/609e9a7cba2efa5084585bbc4d6da809d3d444e6da87612c.jpg',
                store_id = 1,
            ),
            Item(
                name = 'Slime Rancher 2',
                type = 'Advneture',
                description = 'Slime Rancher is the tale of Beatrix LeBeau, a plucky, young rancher who sets out for a life a thousand light years away from Earth on the ‘Far, Far Range’ where she tries her hand at making a living wrangling slimes.',
                quantity = 20,
                price = 30,
                img = 'https://cdn1.epicgames.com/offer/4f09ede568514ca6ad487f9c22a66b81/EGS_SlimeRancher2_MonomiPark_S1_2560x1440-e2797b687003d40372c129182591b2e6_2560x1440-e2797b687003d40372c129182591b2e6',
                store_id = 1
            ),
            Item(
                name = 'Forza Horizon 5',
                type = 'Racing',
                description = 'Your Ultimate Horizon Adventure awaits! Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world’s greatest cars. Conquer the rugged Sierra Nueva in the ultimate Horizon Rally experience. Requires Forza Horizon 5 game, expansion sold separately.',
                quantity = 20,
                price = 60,
                img = 'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1699377450',
                store_id = 1
            )
]

            
            db.session.add_all(items)

            db.session.commit()

    def seed_customers():
            customer = Customer(
                name="Guest",
                user_name="Guest1",
                password="1234Abc!",
                email="example@example.com",
                age= 21,
                membership=False,
            )
            db.session.add(customer)

            db.session.commit()

    def seed_stores():
            store = Store(
                name="CRUD_E_Gaming",
                password="Homiekiss69!",
                email="rawlovernoglover@gmail.com",
                location="6969 Homiekiss Ave",
            )
            db.session.add(store)

            db.session.commit()

    def seed_carts():
            cart = Cart(
                customer_id = 1
            )
            db.session.add(cart)

            db.session.commit()

    if __name__ == '__main__':
        with app.app_context():
            seed_items()  
            seed_customers()  
            seed_stores()
            seed_carts()

        print('Data has been seeded.')