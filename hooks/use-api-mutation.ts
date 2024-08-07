"use client";

import { useMutation } from "convex/react";
import { useState } from "react";

export const UseApiMutation = (mutationFunction: any) => {
    const [pending, setPending] = useState(false);
    const apiMutation = useMutation(mutationFunction);

    const mutate = (payLoad: any) => {
        setPending(true);
        return apiMutation(payLoad)
            .finally(() => setPending(false))
            .then((result) => {
                return result;
            })
            .catch(error => {
                throw error;
            });
    };

    return {
        mutate,
        pending
    };
};