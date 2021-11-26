export function add_v2(a, b) {
    return [
        a[0] + b[0],
        a[1] + b[1]
    ];
}
export function add_v3(a, b) {
    return [
        a[0] + b[0],
        a[1] + b[1],
        a[2] + b[2]
    ];
}
export function add_v4(a, b) {
    return [
        a[0] + b[0],
        a[1] + b[1],
        a[2] + b[2],
        a[3] + b[3]
    ];
}

export function subtract_v2(a, b) {
    return [
        a[0] - b[0],
        a[1] - b[1]
    ];
}
export function subtract_v3(a, b) {
    return [
        a[0] - b[0],
        a[1] - b[1],
        a[2] - b[2]
    ];
}
export function subtract_v4(a, b) {
    return [
        a[0] - b[0],
        a[1] - b[1],
        a[2] - b[2],
        a[3] - b[3]
    ];
}

export function scale_v2(a, b) {
    return [
        a[0] * b,
        a[1] * b
    ];
}
export function scale_v3(a, b) {
    return [
        a[0] * b,
        a[1] * b,
        a[2] * b
    ];
}
export function scale_v4(a, b) {
    return [
        a[0] * b,
        a[1] * b,
        a[2] * b,
        a[3] * b
    ];
}

export function normalize_v2_or_unit_x(a) {
    let len = a[0] * a[0] + a[1] * a[1];
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        return [
            a[0] * len,
            a[1] * len
        ]
    }
    else {
        return [1.0, 0.0]
    }
}
export function normalize_v3_or_unit_x(a) {
    let len = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        return [
            a[0] * len,
            a[1] * len,
            a[2] * len
        ]
    }
    else {
        return [1.0, 0.0, 0.0]
    }
}
export function normalize_v4_or_unit_x(a) {
    let len = a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3];
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        return [
            a[0] * len,
            a[1] * len,
            a[2] * len,
            a[3] * len
        ]
    }
    else {
        return [1.0, 0.0, 0.0, 0.0]
    }
}

export function dot_v2(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}
export function dot_v3(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
export function dot_v4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

export function rotateX_v3(a, origin, angle) {
    p = [
        a[0] - origin[0],
        a[1] - origin[1],
        a[2] - origin[2]
    ];
    r = [
        p[0],
        p[1] * Math.cos(angle) - p[2] * Math.sin(angle),
        p[1] * Math.sin(angle) + p[2] * Math.cos(angle)
    ];
    return [
        r[0] + origin[0],
        r[1] + origin[1],
        r[2] + origin[2]
    ];
}
export function rotateY_v3(a, origin, angle) {
    p = [
        a[0] - origin[0],
        a[1] - origin[1],
        a[2] - origin[2]
    ];
    r = [
        p[2] * Math.sin(angle) + p[0] * Math.cos(angle),
        p[1],
        p[2] * Math.cos(angle) - p[0] * Math.sin(angle)
    ];
    return [
        r[0] + origin[0],
        r[1] + origin[1],
        r[2] + origin[2]
    ];
}
export function rotateZ_v3(a, origin, angle) {
    p = [
        a[0] - origin[0],
        a[1] - origin[1],
        a[2] - origin[2]
    ];
    r = [
        p[0] * Math.cos(angle) - p[1] * Math.sin(angle),
        p[0] * Math.sin(angle) + p[1] * Math.cos(angle),
        p[2]
    ];
    return [
        r[0] + origin[0],
        r[1] + origin[1],
        r[2] + origin[2]
    ];
}

export const add2 = add_v2;
export const add3 = add_v3;
export const add4 = add_v4;

export const sub2 = subtract_v2;
export const sub3 = subtract_v3;
export const sub4 = subtract_v4;

export const scl2 = scale_v2;
export const scl3 = scale_v3;
export const scl4 = scale_v4;

export const nrm2 = normalize_v2_or_unit_x;
export const nrm3 = normalize_v3_or_unit_x;
export const nrm4 = normalize_v4_or_unit_x;

export const dot2 = dot_v2;
export const dot3 = dot_v3;
export const dot4 = dot_v4;

export const rotX = rotateX_v3;
export const rotY = rotateY_v3;
export const rotZ = rotateZ_v3;

//matrix

export function identity_m4() {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
}
export function clone_m4(a) {
    return [
        a[0], a[1], a[2], a[3],
        a[4], a[5], a[6], a[7],
        a[8], a[9], a[10], a[11],
        a[12], a[13], a[14], a[15]
    ];
}
export function transpose_m4(a) {
    return [
        a[0], a[4], a[8], a[12],
        a[1], a[5], a[9], a[13],
        a[2], a[6], a[10], a[14],
        a[3], a[7], a[11], a[15]
    ];
}
export function invert(a) {
    let b00 = a[0] * a[5] - a[1] * a[4];
    let b01 = a[0] * a[6] - a[2] * a[4];
    let b02 = a[0] * a[7] - a[3] * a[4];
    let b03 = a[1] * a[6] - a[2] * a[5];
    let b04 = a[1] * a[7] - a[3] * a[5];
    let b05 = a[2] * a[7] - a[3] * a[6];
    let b06 = a[8] * a[13] - a[9] * a[12];
    let b07 = a[8] * a[14] - a[10] * a[12];
    let b08 = a[8] * a[15] - a[11] * a[12];
    let b09 = a[9] * a[14] - a[10] * a[13];
    let b10 = a[9] * a[15] - a[11] * a[13];
    let b11 = a[10] * a[15] - a[11] * a[14];

    // Calculate the determinant
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    return [
        (a[5] * b11 - a[6] * b10 + a[7] * b09) * det,
        (a[2] * b10 - a[1] * b11 - a[3] * b09) * det,
        (a[13] * b05 - a[14] * b04 + a[15] * b03) * det,
        (a[10] * b04 - a[9] * b05 - a[11] * b03) * det,
        (a[6] * b08 - a[4] * b11 - a[7] * b07) * det,
        (a[0] * b11 - a[2] * b08 + a[3] * b07) * det,
        (a[14] * b02 - a[12] * b05 - a[15] * b01) * det,
        (a[8] * b05 - a[10] * b02 + a[11] * b01) * det,
        (a[4] * b10 - a[5] * b08 + a[7] * b06) * det,
        (a[1] * b08 - a[0] * b10 - a[3] * b06) * det,
        (a[12] * b04 - a[13] * b02 + a[15] * b00) * det,
        (a[9] * b02 - a[8] * b04 - a[11] * b00) * det,
        (a[5] * b07 - a[4] * b09 - a[6] * b06) * det,
        (a[0] * b09 - a[1] * b07 + a[2] * b06) * det,
        (a[13] * b01 - a[12] * b03 - a[14] * b00) * det,
        (a[8] * b03 - a[9] * b01 + a[10] * b00) * det
    ];
}
export function multiply_m4(a, b) {
    return [
        b[0] * a[0] + b[1] * a[4] + b[2] * a[8] + b[3] * a[12],
        b[0] * a[1] + b[1] * a[5] + b[2] * a[9] + b[3] * a[13],
        b[0] * a[2] + b[1] * a[6] + b[2] * a[10] + b[3] * a[14],
        b[0] * a[3] + b[1] * a[7] + b[2] * a[11] + b[3] * a[15],
        b[4] * a[0] + b[5] * a[4] + b[6] * a[8] + b[7] * a[12],
        b[4] * a[1] + b[5] * a[5] + b[6] * a[9] + b[7] * a[13],
        b[4] * a[2] + b[5] * a[6] + b[6] * a[10] + b[7] * a[14],
        b[4] * a[3] + b[5] * a[7] + b[6] * a[11] + b[7] * a[15],
        b[8] * a[0] + b[9] * a[4] + b[10] * a[8] + b[11] * a[12],
        b[8] * a[1] + b[9] * a[5] + b[10] * a[9] + b[11] * a[13],
        b[8] * a[2] + b[9] * a[6] + b[10] * a[10] + b[11] * a[14],
        b[8] * a[3] + b[9] * a[7] + b[10] * a[11] + b[11] * a[15],
        b[12] * a[0] + b[13] * a[4] + b[14] * a[8] + b[15] * a[12],
        b[12] * a[1] + b[13] * a[5] + b[14] * a[9] + b[15] * a[13],
        b[12] * a[2] + b[13] * a[6] + b[14] * a[10] + b[15] * a[14],
        b[12] * a[3] + b[13] * a[7] + b[14] * a[11] + b[15] * a[15]
    ];
}
export function translate_m4(a, v) {
    return [
        a[0], a[1], a[2], a[3],
        a[4], a[5], a[6], a[7],
        a[8], a[9], a[10], a[11],
        a[0] * v[0] + a[4] * v[1] + a[8] * v[2] + a[12],
        a[1] * v[0] + a[5] * v[1] + a[9] * v[2] + a[13],
        a[2] * v[0] + a[6] * v[1] + a[10] * v[2] + a[14],
        a[3] * v[0] + a[7] * v[1] + a[11] * v[2] + a[15]
    ]
}
export function rotate_m4(a, rad, axis) {
    let x = axis[0], y = axis[1], z = axis[2];
    let len = Math.sqrt(x * x + y * y + z * z);
    if (len < glMatrix.EPSILON) { return null; }

    len = 1.0 / len;
    x *= len;
    y *= len;
    z *= len;

    let s = Math.sin(rad);
    let c = Math.cos(rad);
    let t = 1 - c;

    let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];

    // Construct the elements of the rotation matrix
    let b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s;
    let b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s;
    let b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    return [
        a00 * b00 + a10 * b01 + a20 * b02,
        a01 * b00 + a11 * b01 + a21 * b02,
        a02 * b00 + a12 * b01 + a22 * b02,
        a03 * b00 + a13 * b01 + a23 * b02,
        a00 * b10 + a10 * b11 + a20 * b12,
        a01 * b10 + a11 * b11 + a21 * b12,
        a02 * b10 + a12 * b11 + a22 * b12,
        a03 * b10 + a13 * b11 + a23 * b12,
        a00 * b20 + a10 * b21 + a20 * b22,
        a01 * b20 + a11 * b21 + a21 * b22,
        a02 * b20 + a12 * b21 + a22 * b22,
        a03 * b20 + a13 * b21 + a23 * b22,
        a[12],
        a[13],
        a[14],
        a[15]
    ];
}
export function fromTranslation_m4(v) {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        v[0], v[1], v[2], 1
    ];
}
export function lookAt(eye, center, up) {
    if (Math.abs(eye[0] - center[0]) < glMatrix.EPSILON &&
        Math.abs(eye[1] - center[1]) < glMatrix.EPSILON &&
        Math.abs(eye[2] - center[2]) < glMatrix.EPSILON) {
        return identity_m4();
    }

    let z0 = eye[0] - center[0];
    let z1 = eye[1] - center[1];
    let z2 = eye[2] - center[2];

    let len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    let x0 = up[1] * z2 - up[2] * z1;
    let x1 = up[2] * z0 - up[0] * z2;
    let x2 = up[0] * z1 - up[1] * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    let y0 = z1 * x2 - z2 * x1;
    let y1 = z2 * x0 - z0 * x2;
    let y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    return [
        x0, y0, z0, 0,
        x1, y1, z1, 0,
        x2, y2, z2, 0,
        -(x0 * eye[0] + x1 * eye[1] + x2 * eye[2]),
        -(y0 * eye[0] + y1 * eye[1] + y2 * eye[2]),
        -(z0 * eye[0] + z1 * eye[1] + z2 * eye[2]),
        1
    ];
}