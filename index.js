function pow(num, degree) {
  if (degree == 1) {
    return num;
  } else {
    return degree * pow(num, degree - 1);
  }
}
