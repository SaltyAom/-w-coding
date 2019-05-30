import { h, render } from 'preact'
import Landing from './preact/pages/landing'

import './css/init.css'

let mount = document.getElementById("coding-club");
render(<Landing />, mount, mount.lastChild);