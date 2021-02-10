function prime(low, high) {
    for (var i = low; i <= high; i++) {
        flag = 0;
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i == 2) {
                console.log(i);
            }
            if ((i % j) == 0) {
                flag = 1;
                break;
            }

        }
        if (flag == 0) {
            if (i < 2) {
                continue;
            }
            else {
                console.log(i);
            }

        }

    }
}
prime(1, 10);
