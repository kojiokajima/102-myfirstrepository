let score = 90;

if (score <= 100 && score >= 70) {
    console.log('You passed!');
} else if (score < 70 && score >= 50) {
    console.log('You passed, but you need take a supplimentary class');
} else if (score < 50 && score >=0) {
    console.log('You failed');
} else {
    console.log('Score is not valid');
};