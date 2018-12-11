/**
 *
 * @desc   加载远程javascript脚本
 * @param  url: 远程脚本地址
 */
function loadScript(url) {
    let promise = new Promise((resolve) => {
        let el = document.getElementById(url);
        if (el) {
            if (el.getAttribute('loaded') == "1") {
                return resolve()
            }else {
                el.addEventListener('load', () => {
                    resolve();
                }, false);
            }
        }else{
            el = document.createElement('script');
            el.type = 'text/javascript'
            el.async = true;
            el.src = url;
            el.setAttribute("id", url);
            el.addEventListener('load', () => {
                el.setAttribute('loaded', "1")
                resolve();
            }, false);
            document.head.appendChild(el);
        }
    });
    return promise;
}

module.exports = loadScript