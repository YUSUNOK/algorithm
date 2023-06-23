const solution = (sides) => {
    sides.sort((x, y) => x - y);
    return sides[2] < sides[0] + sides[1] ? 1 : 2;
}