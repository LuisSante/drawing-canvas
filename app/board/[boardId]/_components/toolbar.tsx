"use client";

import { Circle, MousePointer2, Pencil, Redo2, Square, StickyNote, Type, Undo2 } from "lucide-react";
import { ToolButton } from "./tool-button";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";

interface ToolbarProps {
    canvasState: CanvasState;
    setCanvasState: (newState: CanvasState) => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
}

export const Toolbar = ({
    canvasState,
    setCanvasState,
    undo,
    redo,
    canUndo,
    canRedo
}: ToolbarProps) => {
    return (

        <div
            className="top-[50%] left-2 absolute flex flex-col gap-y-4 -translate-y-[50%]"
        >
            <div
                className="flex flex-col items-center gap-y-1 bg-white shadow-md p-1.5 rounded-md"
            >
                <ToolButton
                    label="Select"
                    icon={MousePointer2}
                    onClick={() => setCanvasState({ mode: CanvasMode.None, })}
                    isActive={
                        canvasState.mode === CanvasMode.None ||
                        canvasState.mode === CanvasMode.Traslating ||
                        canvasState.mode === CanvasMode.SelecctionNet ||
                        canvasState.mode === CanvasMode.Pressing ||
                        canvasState.mode === CanvasMode.Resizing
                    }
                />
                <ToolButton
                    label="Text"
                    icon={Type}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Text,
                    })}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Text
                    }
                />
                <ToolButton
                    label="Sticky note"
                    icon={StickyNote}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Note
                    })}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Note
                    }
                />
                <ToolButton
                    label="Rectangle"
                    icon={Square}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Rectangle
                    })}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Rectangle
                    }
                />
                <ToolButton
                    label="Ellipse"
                    icon={Circle}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Ellipse
                    })}
                    isActive={
                        canvasState.mode === CanvasMode.Inserting &&
                        canvasState.layerType === LayerType.Ellipse
                    }
                />
                <ToolButton
                    label="Pen"
                    icon={Pencil}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Pencil,
                    })}
                    isActive={
                        canvasState.mode === CanvasMode.Pencil
                    }
                />
            </div>
            <div
                className="flex flex-col items-center bg-white shadow-md p-1.5 rounded-md"
            >
                <ToolButton
                    label="Undo"
                    icon={Undo2}
                    onClick={undo}
                    isDisabled={!canUndo}
                />
                <ToolButton
                    label="Redo"
                    icon={Redo2}
                    onClick={redo}
                    isDisabled={!canRedo}
                />
            </div>
        </div>
    )
}

export const ToolbarSkeleton = () => {
    return (
        <div className="top-[50%] left-2 absolute flex flex-col gap-y-4 bg-white shadow-md w-[52px] h-[360px] -translate-y-[50%]" />
    );
};
