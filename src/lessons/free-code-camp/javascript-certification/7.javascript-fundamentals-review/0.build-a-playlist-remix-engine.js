const playlists = [
  [
    {
      trackId: "trk101",
      artist : "Velvet Comet",
      title  : "Crimson Afterglow",
      votes  : 5,
      bpm    : 122
    },
    {
      trackId: "trk102",
      artist : "Neon Harbor",
      title  : "Static Horizon",
      votes  : 2,
      bpm    : 108
    },
    {
      trackId: "trk103",
      artist : "Lunar Arcade",
      title  : "Midnight Frequency",
      votes  : 4,
      bpm    : 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist : "Solar Echo",
      title  : "Glass Skyline",
      votes  : 3,
      bpm    : 115
    },
    {
      trackId: "trk202",
      artist : "Velvet Comet",
      title  : "Satellite Hearts",
      votes  : 6,
      bpm    : 124
    }
  ]
];

const flattenPlaylists = (playlists) => {
  if (!Array.isArray(playlists)) {
    return [];
  }
  const flatTracks = [];
  for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];
    for (let j = 0; j < playlist.length; j++) {
      const track = playlist[j];
      flatTracks.push({
        ...track,
        source: [i, j]
      });
    }
  }
  return flatTracks;
};

const scoreTracks = (tracks) => {
  return tracks.map(track => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120)
  }));
};

const dedupeTracks = (tracks) => {
  const seenTrackIds = new Set();
  const deduped = [];
  for (const track of tracks) {
    if (!seenTrackIds.has(track.trackId)) {
      seenTrackIds.add(track.trackId);
      deduped.push(track);
    }
  }
  return deduped;
};

const enforceArtistQuota = (tracks, maxOccurrences) => {
  const artistCounts = {};
  const quotaEnforced = [];
  for (const track of tracks) {
    const count = artistCounts[track.artist] || 0;
    if (count < maxOccurrences) {
      quotaEnforced.push(track);
      artistCounts[track.artist] = count + 1;
    }
  }
  return quotaEnforced;
};

const buildSchedule = (tracks) => {
  return tracks.map((track, index) => ({
    slot   : index + 1,
    trackId: track.trackId
  }));
};

const remixPlaylist = (playlists, maxOccurrences) => {
  const flatTracks = flattenPlaylists(playlists);
  const scoredTracks = scoreTracks(flatTracks);
  const dedupedTracks = dedupeTracks(scoredTracks);
  const quotaEnforcedTracks = enforceArtistQuota(dedupedTracks, maxOccurrences);
  return buildSchedule(quotaEnforcedTracks);
};

// Example usage:
console.log(remixPlaylist(playlists, 1));