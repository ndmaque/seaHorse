export interface Boat { 
  id: string; 
  name: string; 
  }

/*

  { 
    id: {type: String,  default: 'piZero'},
    seaHorseId: {type: String,  default: 'piZero'},
    ip: {type: String, default: '192.168.0.12'},
    label: {type: String,  default: 'No Label'},
    waypoints: Schema.Types.Mixed,
    isActive: {type: Boolean, default: false},
    activeWaypoint: {type: Number, default: -1},
    journeyStartTime: {type: Date},
    lastUpdateReceived: {type: Date, default: Date.now},
    lastUpdateSent: {type: Date, default: Date.now}
  }*/