const musicmodel = require("../models/music.model");
const jwt = require("jsonwebtoken");


const { uploadFile } = require("../services/storage.service");

const albumModel = require("../models/album.model");


async function createMusic(req, res) {
    const { title } = req.body;
    const file = req.file;

    // Upload music file
    const result = await uploadFile(
      file.buffer.toString("base64")
    );

    // Create music document
    const music = await musicmodel.create({
      uri: result.url,
      title,
      artist: req.user.id,
    });

    return res.status(201).json({
      message: "Music created successfully",
      music:{
        id:music._id,
        uri:music.uri,
        title:music.title,
        artist:music.artist
      }
    });
} 

async function createAlbum(req,res){
    const {title,musics} = req.body;
    const album = await albumModel.create({
      title,
      artist:req.user.id,
      musics:musics
    })
    res.status(201).json({
      message:"Album created sucessfully",
      album:{
        id:album._id,
        title:album.title,
        artist:album.artist,
        musics:album.musics
      }
    })
}

async function getAllMusic(req,res){
  const musics = await musicModel.find().limit(2).populate("artist","username email");
  res.status(200).json({
    message : "Music fetched successfully",
    musics : musics,
  })
}

async function getAllAlbums(req,res){
  const albums = await albumModel.find().select("title artist").populate("artist","username email");
  res.status(200).json({
    message : "Album fetched sucessfully",
    albums:albums
  })
}

async function getAlbumById(req,res){
  const albumId = req.params.albumId;
  const album = await albumModel.findById(albumId).populate("artist","username email")
  return res.status(200).json({
    message : "Album fetched sucessfully",
    album :album,
  })
}

module.exports = {
  createMusic,
  createAlbum,
  getAllMusic,
  getAllAlbums,
  getAlbumById
};