import { ImageStyleProps, Line, Path, PathStyleProps, Polyline } from '@antv/g';
import { PathArray } from '@antv/util';
import type { BadgeStyleProps, LabelStyleProps } from '../elements/shapes';
import type { CardinalPlacement, CornerPlacement } from './placement';
import { Size } from './size';

export type EdgeDirection = 'in' | 'out' | 'both';

export type EdgeKey = Line | Path | Polyline;

/**
 * <zh/> 边上标签样式配置项
 *
 * <en/> Edge label style properties
 */
export interface EdgeLabelStyleProps extends LabelStyleProps {
  /**
   * <zh/> 标签相对于边的位置。取值范围为 'start'、'center'、'end' 或特定比率（数字 0-1）
   *
   * <en/> Label position relative to the edge (keyShape) that can be 'start', 'center', 'end' or a specific ratio (number 0-1)
   * @defaultValue 'center'
   */
  placement?: 'start' | 'center' | 'end' | number;
  /**
   * <zh/> 标签平行于边的水平偏移量
   *
   * <en/> The horizontal offset of the label parallel to the edge
   * @defaultValue 4
   */
  offsetX?: number;
  /**
   * <zh/> 标签垂直于边的垂直偏移量
   *
   * <en/> The vertical offset of the label perpendicular to the edge
   * @defaultValue 0
   */
  offsetY?: number;
  /**
   * <zh/> 是否自动旋转，保持与边的方向一致
   *
   * <en/> Indicates whether to automatically rotate the label to keep it consistent with the direction of the edge
   * @defaultValue true
   */
  autoRotate?: boolean;
  /**
   * <zh/> 文本的最大宽度，超出部分会用省略号代替
   *
   * <en/> maxWidth of label text, the overflow part will be replaced by an ellipsis
   * @defaultValue '80%'
   */
  maxWidth?: string | number;
}

/**
 * <zh/> 边上徽标样式配置项
 *
 * <en/> Edge badge style properties
 */
export interface EdgeBadgeStyleProps extends BadgeStyleProps {
  /**
   * <zh/> 徽标的位置
   * - `'prefix'`: 置于标签前
   * - `'suffix'`: 置于标签后
   *
   * <en/> The position of the badge
   * - `'prefix'`: Placed before the label
   * - `'suffix'`: Placed after the label
   */
  placement: 'prefix' | 'suffix';
  /**
   * <zh/> 徽标在 X 轴上的偏移量
   *
   * <en/> The offset of the badge on the X-axis
   */
  offsetX?: number;
  /**
   * <zh/> 徽标在 Y 轴上的偏移量
   *
   * <en/> The offset of the badge on the Y-axis
   */
  offsetY?: number;
}

/**
 * <zh/> 边上箭头的样式配置项
 *
 * <en/> Edge arrow style properties
 */
export interface EdgeArrowStyleProps
  extends PathStyleProps,
    Omit<ImageStyleProps, 'width' | 'height'>,
    Record<string, unknown> {
  /**
   * <zh/> 箭头大小
   *
   * <en/> Arrow size
   * @defaultValue 8
   */
  size?: Size;
  /**
   * <zh/> 箭头类型
   *
   * <en/> Arrow type
   * @defaultValue 'triangle'
   */
  type?:
    | 'triangle'
    | 'circle'
    | 'diamond'
    | 'vee'
    | 'rect'
    | 'triangleRect'
    | 'simple'
    | ((width: number, height: number) => PathArray);
}

export type LoopPlacement = CardinalPlacement | CornerPlacement;

/**
 * <zh/> 自环样式配置项
 *
 * <en/> Loop style properties
 */
export interface LoopStyleProps {
  /**
   * <zh/> 边的位置
   *
   * <en/> The position of the edge
   * @defaultValue 'top'
   */
  placement?: LoopPlacement;
  /**
   * <zh/> 指定是否顺时针绘制环
   *
   * <en/> Specify whether to draw the loop clockwise
   * @defaultValue true
   */
  clockwise?: boolean;
  /**
   * <zh/> 从节点 keyShape 边缘到自环顶部的距离，用于指定自环的曲率，默认为宽度或高度的最大值
   *
   * <en/> Determine the position from the edge of the node keyShape to the top of the self-loop, used to specify the curvature of the self-loop, the default value is the maximum of the width or height
   */
  dist?: number;
}
