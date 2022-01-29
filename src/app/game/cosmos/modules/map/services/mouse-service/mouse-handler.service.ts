import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

import { DialogComponent } from '../../container/dialog/dialog.component';
import { DrawService } from '../canvas/draw.service';
import { Hexagon } from './../../model/hexagon';
import { ClickService } from './click.service';

export enum MouseButton {
  LEFT = 0,
  RIGHT = 2,
}
export interface SelectedHexagonIds {
  first: string | undefined;
  second: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class MouseHandlerService {
  public selectedHexagons: Map<string, Hexagon> = new Map([]);
  public selectedHexagonId: SelectedHexagonIds = {
    first: undefined,
    second: undefined,
  };

  constructor(
    private clickService: ClickService,
    private drawService: DrawService,
  ) {}

  public clear(): void {
    this.selectedHexagons.clear();
    this.selectedHexagonId = {
      first: undefined,
      second: undefined,
    };
  }

  public click(
    event: any,
    hexagon: Hexagon,
    context: CanvasRenderingContext2D,
    hexagonMap: Map<string, Hexagon>,
    paths: any[]
  ): void {
    if (this.isHexagonSelected(hexagon.name)) {
      this.unClickAndDeleteHexagon(hexagon);
    } else if (this.selectedHexagons.size === 0) {
      this.selectHexagon(hexagon);
    } else if (this.selectedHexagons.size === 1) {
      this.selectHexagon(hexagon);
      this.drawService.drawPath(
        this.selectedHexagonId,
        this.selectedHexagons,
        context,
        hexagonMap,
        paths
      );
    } else if (this.selectedHexagons.size === 2) {
      this.selectedHexagonId.second &&
        this.unClickAndDeleteHexagon(
          this.selectedHexagons.get(this.selectedHexagonId.second)
        );
      this.selectHexagon(hexagon);
      this.drawService.drawPath(
        this.selectedHexagonId,
        this.selectedHexagons,
        context,
        hexagonMap,
        paths
      );
    }
  }

  private selectHexagon(hexagon: Hexagon | undefined): void {
    if (hexagon) {
      hexagon.click();
      this.selectedHexagons.set(hexagon.name, hexagon);
      this.selectedHexagonId.first
        ? (this.selectedHexagonId.second = hexagon.name)
        : (this.selectedHexagonId.first = hexagon.name);
    }
  }

  private unClickAndDeleteHexagon(hexagon: Hexagon | undefined): void {
    if (hexagon) {
      hexagon.click();
      this.deleteFromIds(hexagon.name);
      this.selectedHexagons.delete(hexagon.name);
    }
  }

  private deleteFromIds(name: string): void {
    this.selectedHexagonId.first === name
      ? this.swapSecondToFirst()
      : (this.selectedHexagonId.second = undefined);
  }

  private swapSecondToFirst(): void {
    this.selectedHexagonId.first = this.selectedHexagonId.second;
    this.selectedHexagonId.second = undefined;
  }

  private isHexagonSelected(hexagonName: string): boolean {
    return (
      this.selectedHexagonId.first === hexagonName ||
      this.selectedHexagonId.second === hexagonName
    );
  }
}
