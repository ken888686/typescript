"use strict";
// public(default): 公開
// private: 私有
// protected: 受保護
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Live2_name;
class Live {
    constructor(roomName, id, hostName) {
        console.log("建立直播中...");
        this.roomName = roomName;
        this.id = id;
        this.hostName = hostName;
    }
}
class CarLive extends Live {
    constructor(roomName, id, hostName) {
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
    constructor(name) {
        // private
        _Live2_name.set(this, void 0);
        __classPrivateFieldSet(this, _Live2_name, name, "f");
    }
}
_Live2_name = new WeakMap();
const live2 = new Live2("第3號");
console.log("live2:", live2);
// private: 打包後還是看得到
// #: 打包後不會出現，實現真正的private
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNCQUFzQjtBQUN0QixjQUFjO0FBQ2QsaUJBQWlCOzs7Ozs7OztBQUVqQixNQUFNLElBQUk7SUFLUixZQUFZLFFBQWdCLEVBQUUsRUFBVSxFQUFFLFFBQWdCO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQVEsU0FBUSxJQUFJO0lBQ3hCLFlBQVksUUFBZ0IsRUFBRSxFQUFVLEVBQUUsUUFBZ0I7UUFDeEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELEtBQUs7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUUzQixNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBRWpDLE1BQU0sS0FBSztJQUdULFlBQVksSUFBWTtRQUZ4QixVQUFVO1FBQ1YsOEJBQWM7UUFFWix1QkFBQSxJQUFJLGVBQVMsSUFBSSxNQUFBLENBQUM7SUFDcEIsQ0FBQztDQUNGOztBQUVELE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRTdCLG9CQUFvQjtBQUNwQiwwQkFBMEIifQ==