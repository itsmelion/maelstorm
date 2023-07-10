# Maelstorm
[![QualityChecks](https://github.com/itsmelion/elements/actions/workflows/lint.yml/badge.svg)](https://github.com/itsmelion/elements/actions/workflows/lint.yml)

Reading is nice.. but i have a intro video for you!<br/>
[![](https://markdown-videos.vercel.app/youtube/hqc3VsUEF48)](https://youtu.be/hqc3VsUEF48)
#### Goal:
My focus on this test is to display the wider knowledge i have as a professional as i can in the time invested.
I may briefly, but enoughly covered many subjects that i consider relevant for a JS professional.
Them being:
- Clean and comprehensive code
- good architecture, ability to think and organize massive projects.
- capability to operate the libraries suggested by the company


## Installation and usage
- `npm install`
- `npx nx run maelstorm:start`(will start metro for the mobile app)
  - its important to ensure node-modules in the apps are linked with: `npx nx run maelstorm:ensure-symlink`
- `npx nx run maelstorm:run-android` (will launch android)

(with Nx [vscode plugin](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) you can see all commands available)
### Architecture:

This project is a Monorepo type(integrated repo).
All dependencies are installed on the root folder, and used on packages and apps.
Its good because allow ease to implement the pattern and the following possibilities:
- apps:
  - (all standalone applications, that often get deployed. websites etc. consumers of libs, as explained below.)
- libs:
  - all that contributes to organize the multiple needs of the application ecossystem.
  - they contain for example:
  - utils/helpers (pure functions, oftem small like: convertToNumber)
  - publishable ESLint especific for the company or project.
  - Design Systems
  - Services often consumed across apps (eg: `Files.awsUploader(item)`)
  - modules, like route stacks often feature-flagged stuff

Many of my design patters come from Angular, especially the naming ex: `File.module.ts` + `File.styles.scss` etc..
I usually cluster functionality under its own folder, and it can scale infinitelly and removed easily by deleting the parent and its imports.

#### Tests and quality ensurance
- I've created a GitHub action workflow to run linting and tests on the CI.
- `npx nx run-many --target=test` (will run all unit tests)

### Software decisions:

| Subject | Tooling | Motivations |
|---|---|---|
| Style | `tamagui` | I never used it before, but as long any lib has styled-component/emotion nature, offers great suport for typescript and theming im good. I chose it based on its performance benchmarks and universality considering RN + Web & SSR and its neat "props as style" option. Other nice options where `dripsy`|
| Animation | `moti` | It is performant and offers a familiar API as framer-motion, making easy to create simpler transitions, spring animations and so. |
| ErrorHandling | `react-native-error-boundary` and `react-native-exception-handler` | One offers DOM error placeholder to side with Suspense-mode in react, and the other catches global JS and Native throws.|
| State and Network data | `react-query` and `redux` | I abandoned redux for almost 4 years now, and dont see usage for it here, but seems a plus for many reviewers, therefore im doing some basic operations with it here and there just because.|
| Typescript and data validation | `zod` | Although i didnt used it at all, i would use Zod to declare more niche types (ex: UUID instead of string) and validate it. maybe in conjunction with stuff like `react-hook-form`|

#### Disclaimers
- My windows enviromnent was very buggy and inconvenient dev experience, so sorry for any bloopers.
