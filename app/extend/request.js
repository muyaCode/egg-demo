module.exports = {
    isChrome(){
        let userAgent = this.get('user-agent').toLowerCase();
        return userAgent.includes('chrome');
    }
}