
PlaylistSong.destroy_all
Friendship.destroy_all
Song.destroy_all
Playlist.destroy_all
User.destroy_all

puts "Seeding user..."
u1= User.create(name: "Saturn",
    email: 'saturn@sailorscout.com',
    password: 'Nike797524!',
    avatar: 'https://static.wikia.nocookie.net/p__/images/a/ab/Sailor_Saturn_Season_III.png/revision/latest?cb=20170423023847&path-prefix=protagonist')
u2= User.create(name: "Neptune",
    email: 'neptune@sailorscout.com',
    password: 'Lala12345!',
    avatar: 'https://static.wikia.nocookie.net/sailormoon/images/b/be/S.M.E_Movie_Michiru_Kaioh_Sailor_Neptune.png/revision/latest?cb=20201220155902')

puts "Seeding fake playlists..."
# Create 10 playlists, each owned by a user
p1=Playlist.create(name: 'Orbiting', creator: u1)
p2=Playlist.create(name: 'Drifting', creator: u2)



puts "Seeding songs..."

s1=Song.create(name: 'Happy', artist: 'Pharrell Williams', album_name: 'Happy', duration_ms: 10000, spotify_id: 1, preview_url: 'https://www.epidemicsound.com/track/yrqOfPHAQf/', image_url: 'https://upload.wikimedia.org/wikipedia/en/2/23/Pharrell_Williams_-_Happy.jpg')
:name

puts "Seeding friendships... "

fr1=Friendship.create(recipient: u1, sender: u2, status: "accepted")


puts "Seeding playlist songs..."

pls1=PlaylistSong.create(playlist: p2, song: s1)

puts "Seeding completed!"