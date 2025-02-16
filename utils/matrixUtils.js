function createIdentityMatrix() {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}

function multiplyInto(out, a, b) {
    const result = new Array(16).fill(0)

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
                result[i * 4 + j] += a[i * 4 + k] * b[k * 4 + j]
            }
        }
    }

    for (let i = 0; i < 16; i++) {
        out[i] = result[i]
    }
}

function reuseTranslate3dCommand(matrix, x, y, z) {
    const translationMatrix = createIdentityMatrix()
    translationMatrix[12] = x
    translationMatrix[13] = y
    translationMatrix[14] = z
    multiplyInto(matrix, translationMatrix, matrix)
}

export default {
    createIdentityMatrix,
    multiplyInto,
    reuseTranslate3dCommand
}
