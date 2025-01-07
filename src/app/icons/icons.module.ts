import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  TrendingUp,
  DollarSign,
  Compass,
  Command,
  Box,
  Camera,
  Bell,
  Monitor,
  Calendar,
  Clock,
  ShoppingCart,
  Dribbble,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Moon,
  Sun,
  FileText,
  Edit,
  CheckSquare,
  BookOpen,
  Crosshair,
  PhoneCall,
  MessageSquare

} from 'angular-feather/icons';

const icons = {
  TrendingUp,
  DollarSign,
  Compass,
  Command,
  Box,
  Camera,
  Bell,
  Monitor,
  Calendar,
  Clock,
  ShoppingCart,
  Dribbble,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Moon,
  Sun,
  FileText,
  Edit,
  CheckSquare,
  BookOpen,
  Crosshair,
  PhoneCall,
  MessageSquare
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
