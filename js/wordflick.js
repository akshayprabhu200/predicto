export function wordflick(words) {
  let part;
  let i = 0;
  let offset = 0;
  let len = words.length;
  let forwards = true;
  let skip_count = 0;
  let skip_delay = 15;
  let speed = 70;

  const intervalId = setInterval(() => {
    if (forwards) {
      if (offset >= words[i].length) {
        if (i === len - 1) {
          // check if it's the last element in the array
          clearInterval(intervalId); // stop the animation
          return;
        }
        skip_count++;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.getElementById("answer").textContent = part;
  }, speed);
}
