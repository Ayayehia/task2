function dotProduct(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
}
return ps;

function areVectorsOrthogonal(vectors) {
  const result = dotProduct(v1, v2);
  if (result === 0) {
    console.log(`The vectors (${v1}, ${v2}) are orthogonal.`);
  } else {
    console.log(`The vectors (${v1}, ${v2}) are not orthogonal.`);
  }
}
