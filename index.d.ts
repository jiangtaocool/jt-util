
declare namespace util {
  /**
   * 
   * @desc 加载Script
   * @param {String} url
   * @return {Promise} load
   */
  export function loadScript(url: String): Promise<any>


}

declare module "util" {
  export = util
}
