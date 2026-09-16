# GRAPPLE source material

The website's four module pages follow slide 3 of `ONR_Intro_slides.pptx`.
The introduction deck supplies the program title, team, award, period, research
objective, module names, and overview claims.

| Module page | Supplied video | Web copy |
| --- | --- | --- |
| Environment Abstraction | Abstraction_Video.mp4 | assets/media/environment.mp4 |
| Physics Informed Human Model | Human_video_2.mp4 | assets/media/human.mp4 |
| Neuro-Symbolic Vehicle Model | Vehicle_video.mp4 | assets/media/vehicle.mp4 |
| COA Generation | Coa_planning_expo.mp4 | assets/media/coa.mp4 |

Web copies preserve full duration, use 1280 × 720 H.264 video, and retain source
audio streams where present. Original videos are intentionally excluded from
Git because each exceeds GitHub's 100 MiB file limit. The supplied introduction
deck is linked directly. Figures are extracted video frames, not reconstructions.

## Evidence distinctions preserved on the pages

- Introduction: 1,200× faster planning and 30 ms weather update.
- Abstraction demonstration: 2,240× ground-map comparison, 0.09 s weather update,
  0.013 s task-pair route, 380 routes per agent, 0.48 s combined computation.
  These are separate reported experiments; identical conditions are not established.
- Human traversal at 29 Palms is explicitly simulated. Weather-learning numbers
  describe prediction-error improvements, not shorter mission durations.
- Vehicle: the intro reports 75% less detour. Detailed benchmark conditions are
  not supplied. Real-world footage and simulation are identified separately.
- COA: approximately 100 minutes for initial generation of 20 plans; 34.45 ms
  for validation of the precomputed pool, excluding rendering and plotting;
  24.95 hours is the selected resilient mission's makespan. The within-one-hour
  generation statement is a program objective, not the demonstrated result.

Pages cite the original presentation and approximate video chapters. No network
architecture, evaluation sample size, publication record, or author attribution
beyond the supplied material has been invented.
