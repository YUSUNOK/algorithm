const solution = (babbling) => {
    const ableBabbles = ['aya', 'ye', 'woo', 'ma'];
    for(let ablebabble of ableBabbles) {
        babbling = babbling.map((babble) => babble.replaceAll(ablebabble, '+'));
    }
    return babbling.map((babble) => babble.replaceAll('+', '')).filter((babble) => babble === '').length;
}