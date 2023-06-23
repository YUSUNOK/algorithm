const solution = (array, height) => 
    array
    .filter((heightOfFriend) => heightOfFriend > height)
    .length;