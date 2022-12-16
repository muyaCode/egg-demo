module.exports = {
  isChrome() {
    const userAgent = this.get('user-agent').toLowerCase();
    return userAgent.includes('chrome');
  },
};
