import './style.css'
import {part1, part2} from "../days/01";

document.querySelector<HTMLOutputElement>('#part1')!.innerHTML = JSON.stringify(part1(), null, 2);
document.querySelector<HTMLOutputElement>('#part2')!.innerHTML = JSON.stringify(part2(), null, 2);
