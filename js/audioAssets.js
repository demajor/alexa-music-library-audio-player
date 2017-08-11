'use strict';

// Audio Files Source - Amazon S3 : https://s3.amazonaws.com/dougmajormusicfiles/
var audioData = [
    {
      'title' : 'Into The Darkness',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/1_Into_The_Darkness.mp3'
    },
    {
      'title' : 'New Mexico Sunrise',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/2_New_Mexico_Sunrise.mp3'
    },
    {
      'title' : 'Moonwatcher',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/3_Moonwatcher.mp3'
    },
    {
      'title' : 'Unfailing',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/4_Unfailing.mp3'
    },
    {
      'title' : 'Shocklee Everlasting, String Quartet No. 1 in D minor, Op. 5, Allegro',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/5_Shocklee_Everlasting_StringQuartet_No1_Dminor_Op5_Allegro.mp3'
    },
    {
      'title' : 'Church (Cosmo)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/6_Church_(Cosmo).mp3'
    },
    {
      'title' : 'Malaise (Fast Forward)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/7_Malaise_(Fast_Forward).mp3'
    },
    {
      'title' : 'On The Open Water (The Refuge)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/8_On_The_Open_Water_(The_Refuge).mp3'
    },
    {
      'title' : 'Native Fish',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/9_Native_Fish.mp3'
    },
    {
      'title' : 'Seeing Through The Fog (Fast Forward)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/10_Seeing_Through_The_Fog_(Fast_Forward).mp3'
    },
    {
      'title' : 'Wonderland',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/11_Wonderland.mp3'
    },
    {
      'title' : 'Dreamscapes (Cosmo)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/12_Dreamscapes_(Cosmo).mp3'
    },
    {
      'title' : 'Heartland',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/13_Heartland.mp3'
    },
    {
      'title' : 'Seychelles (Cosmo)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/14_Seychelles_(Cosmo).mp3'
    },
    {
      'title' : 'Inheritance (The Refuge)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/15_Inheritance_(The_Refuge).mp3'
    },
    {
      'title' : 'Cathedral (The Refuge)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/16_Cathedral_(The_Refuge).mp3'
    },
    {
      'title' : 'Love Apple',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/17_Love_Apple.mp3'
    },
    {
      'title' : 'Powder (Shocklee: A Fairy Tale)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/18_Powder_(Shocklee_A_Fairy_Tale).mp3'
    },
    {
      'title' : 'Souvenir (The Refuge)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/19_Souvenir_(The_Refuge).mp3'
    },
    {
      'title' : "Gwich'in Women (The Refuge)",
      'url' : "https://s3.amazonaws.com/dougmajormusicfiles/20_Gwich'in_Women_(The_Refuge).mp3"
    },
    {
      'title' : 'The Dance (The Refuge)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/21_The_Dance_(The_Refuge).mp3'
    },
    {
      'title' : 'Reflections (Clare)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/22_Reflections_(Clare).mp3'
    },
    {
      'title' : 'Mellifluous',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/23_Mellifluous.mp3'
    },
    {
      'title' : 'Open Door',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/24_Open_Door.mp3'
    },
    {
      'title' : 'Star Fall',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/25_Star_Fall.mp3'
    },
    {
      'title' : 'Possession (Cosmo)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/26_Possession_(Cosmo).mp3'
    },
    {
      'title' : 'Infallible',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/27_Infallible.mp3'
    },
    {
      'title' : 'Stargazer',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/28_Stargazer.mp3'
    },
    {
      'title' : 'Nomadic (Fast Forward)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/29_Nomadic_(Fast_Forward).mp3'
    },
    {
      'title' : 'Burkheimer (Filson)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/30_Burkheimer_(Filson).mp3'
    },
    {
      'title' : 'Raindrops (Carter)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/31_Raindrops_(Carter).mp3'
    },
    {
      'title' : 'Ivey Divey',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/32_Ivey_Divey.mp3'
    },
    {
      'title' : 'Endalaus',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/33_Endalaus.mp3'
    },
    {
      'title' : 'Unfailing (Reprise)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/34_Unfailing_(Reprise).mp3'
    },
    {
      'title' : 'Shocklee Everlasting, String Quartet No. 1 in D minor, Op. 5, Allegro (Solo Piano)',
      'url' : 'https://s3.amazonaws.com/dougmajormusicfiles/35_Shocklee_Everlasting_StringQuartet_No1_Dminor_Op5_Allegro_(Solo_Piano).mp3'
    }
];

module.exports = audioData;
