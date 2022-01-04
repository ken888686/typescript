// public(default): 公開
// private: 私有
// protected: 受保護

class Live {
  roomName: string;
  private id: string;
  protected hostName: string;

  constructor(roomName: string, id: string, hostName: string) {
    console.log("建立直播中...");
    this.roomName = roomName;
    this.id = id;
    this.hostName = hostName;
  }
}

class CarLive extends Live {
  constructor(roomName: string, id: string, hostName: string) {
    super(roomName, id, hostName);
  }

  start() {
    console.log(`${super.roomName}直播開始`);
  }
}

const live = new Live("第1號", "000001", "Aaron");
console.log("live:", live);

const carLive = new CarLive("第2號", "000002", "Aaron's car");
console.log("carLive:", carLive);

class Live2 {
  // private
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }
}

const live2 = new Live2("第3號");
console.log("live2:", live2);

// private: 打包後還是看得到
// #: 打包後不會出現，實現真正的private
