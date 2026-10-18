import { getCurrentOwner } from "../auth/server";
import { createPlanApi } from "./api";
import { planStore } from "./store";

export const plansApi = createPlanApi({ owner: getCurrentOwner, store: planStore });
