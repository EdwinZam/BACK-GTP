"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HypnoAssistantModule = void 0;
const common_1 = require("@nestjs/common");
const hypno_assistant_service_1 = require("./hypno-assistant.service");
const hypno_assistant_controller_1 = require("./hypno-assistant.controller");
let HypnoAssistantModule = class HypnoAssistantModule {
};
exports.HypnoAssistantModule = HypnoAssistantModule;
exports.HypnoAssistantModule = HypnoAssistantModule = __decorate([
    (0, common_1.Module)({
        controllers: [hypno_assistant_controller_1.HypnoAssistantController],
        providers: [hypno_assistant_service_1.HypnoAssistantService],
    })
], HypnoAssistantModule);
//# sourceMappingURL=hypno-assistant.module.js.map