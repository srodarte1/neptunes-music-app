
PlaylistSong.destroy_all
Friendship.destroy_all
Song.destroy_all
Playlist.destroy_all
User.destroy_all

puts "Seeding user..."

u1= User.create(name: "Sadie",
    email: 'sadie@dogs.com',
    password: 'Sadie1234',
    avatar: 'https://iili.io/HXqoWzb.jpg')
u2= User.create(name: "Binx",
    email: 'Binx@cats.com',
    password: 'Binx1234',
    avatar: 'https://iili.io/HXqoZ7t.jpg')
u3= User.create(name: "Koda",
    email: 'KuteKodaKat@cats.com',
    password: 'Koda797524!',
    avatar: 'https://iili.io/HWkhb1I.jpg')
u4= User.create(name: "Kylo",
    email: 'Kylo@dogs.com',
    password: 'Kylo1234',
    avatar: 'https://iili.io/HXqxu3B.jpg')
u5= User.create(name: "Gemini",
    email: 'Geminin@cats.com',
    password: 'Gemini1234',
    avatar: 'https://iili.io/HXqxAYP.jpg')
u6= User.create(name: "Peanut",
    email: 'Peanut@dogs.com',
    password: 'Peanut1234',
    avatar: 'https://iili.io/HXqxaja.jpg')

puts "Seeding fake playlists..."
# Create 10 playlists, each owned by a user
p1=Playlist.create(name: 'Orbiting', user: u1)
p2=Playlist.create(name: 'Drifting', user: u2)
p4=Playlist.create(name: 'Meow', user: u3)
p5=Playlist.create(name: 'Klaw', user: u3)
p6=Playlist.create(name: 'Klimb', user: u3)
p7=Playlist.create(name: 'Qt', user: u3)
p8=Playlist.create(name: 'Nap Time', user: u3)


puts "Seeding songs..."

s1=Song.create(name: 'Happy', artist: 'Pharrell Williams', album_name: 'Happy', duration_ms: 10000, spotify_id: 1, preview_url: 'https://www.epidemicsound.com/track/yrqOfPHAQf/', image_url: 'https://upload.wikimedia.org/wikipedia/en/2/23/Pharrell_Williams_-_Happy.jpg')


puts "Seeding friendships... "

fr1=Friendship.create(recipient: u3, sender: u2, status: "accepted")
f2=Friendship.create(recipient: u3, sender: u6, status: "pending")
f3=Friendship.create(recipient: u3, sender: u1, status: "accepted")
f4=Friendship.create(recipient: u3, sender: u4, status: "pending")
f5=Friendship.create(recipient: u3, sender: u5, status: "pending")


puts "Seeding playlist songs..."

pls1=PlaylistSong.create(playlist: p2, song: s1)

puts "Seeding completed!"