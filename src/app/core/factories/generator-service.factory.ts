import { GeneratorService } from "../services/generator.service";

export let generatorServiceFactory = () => { return new GeneratorService(5); }