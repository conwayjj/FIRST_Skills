// That ONE Team — Training Hub :: module catalog
//
// This is the list that drives the card grid on index.html. To add a new
// module once its page is built, add an entry here and point `href` at the
// real page (see /site/README.md for the full walkthrough).
//
// status: 'coming-soon' -> card links to the template preview (modules/template.html)
//         'available'    -> card links to the real module page via `href`
window.TOT_MODULES = [
  {
    slug: 'inverse-kinematics',
    title: 'Inverse Kinematics',
    category: 'Kinematics',
    summary: 'Work backward from a desired end-effector position to the joint angles that get you there — write a Java step(dt) solver and watch a real inertia-aware arm chase your target.',
    status: 'available',
    href: 'site/modules/inverse-kinematics.html',
  },
  {
    slug: 'filters',
    title: 'Filters',
    category: 'Sensors',
    summary: 'Smooth noisy sensor data in real time with moving-average, low-pass, and Kalman-style filters before it reaches your control loop.',
    status: 'available',
    href: 'site/modules/filters.html',
  },
  {
    slug: 'image-recognition',
    title: 'Image Recognition',
    category: 'Vision',
    summary: 'Detect field elements and AprilTags from a camera feed, then turn pixels into targeting data your robot can act on.',
    status: 'available',
    href: 'site/modules/image-recognition.html',
  },
  {
    slug: 'mecanum-drive',
    title: 'Mecanum Drive',
    category: 'Drivetrain',
    summary: 'Command four mecanum wheels to drive, strafe, and rotate independently — and see the vectors that make it possible.',
    status: 'available',
    href: 'site/modules/mecanum-drive.html',
  },
  {
    slug: 'swerve-drive',
    title: 'Swerve Drive',
    category: 'Drivetrain',
    summary: 'Independently steer and drive each swerve module for holonomic motion — the drivetrain behind modern FRC robots.',
    status: 'available',
    href: 'site/modules/swerve-drive.html',
  },
  {
    slug: 'pidf-control',
    title: 'PIDF Control',
    category: 'Controls',
    summary: 'Tune proportional, integral, derivative, and feedforward terms live and watch a simulated mechanism converge on target.',
    status: 'available',
    href: 'site/modules/pidf-control.html',
  },
];
