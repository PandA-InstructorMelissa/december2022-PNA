data = [
    3,
    [1, 2, 3, 4],
    [
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [
            [1, 2, 3],
            [1, 2, 3, 4, [1, 2, 3, 4]],
            [
                [1, 2, 3, 4],
                [1, 2, 3, 4, 5],
                [
                    [1, 2, 3],
                    [1, 2, 3, 4, [1, 2, 3, 4]],
                ]
            ],
            [3, 4, 5],
            [
                [1, 2, 3, 4],
                [1, 2, 3, 4, 5],
                [
                    [1, 2, 3],
                    [1, 2, 3, 4, [1, 2, 3, 4]],
                    [
                        [1, 2, 3, 4],
                        [1, 2, 3, 4, 5],
                        [
                            [1, 2, 3],
                            [1, 2, 3, 4, [1, 2, 3, 4]],
                            [
                                [1, 2, 3, 4],
                                [1, 2, 3, 4, 5],
                                [
                                    [1, 2, 3],
                                    [1, 2, 3, 4, [1, 2, 3, 4]],
                                    [
                                        [1, 2, 3, 4],
                                        [1, 2, 3, 4, 5],
                                        [
                                            [1, 2, 3],
                                            [1, 2, 3, 4, [1, 2, 3, 4]],
                                        ]
                                    ],
                                    [3, 4, 5],
                                ]
                            ],
                            [3, 4, 5],
                        ]
                    ],
                    [3, 4, 5],
                ]
            ],
            [3, 4, 5],
        ]
    ],
    [3, 4, 5],
    1,
    3,
]











var sum = 0
function funWithRecursion(d) {
    for (var i = 0; i < d.length; i++){
        if(!Array.isArray(d[i])) {
            sum = sum + d[i]
        } else {
            funWithRecursion(d[i])
        }
    }
    return sum
}
console.log(funWithRecursion(data))