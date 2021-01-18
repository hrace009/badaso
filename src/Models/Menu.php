<?php

namespace Uasoft\Badaso\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Menu extends Model
{
    use LogsActivity;
    
    protected $fillable = [
        'key',
        'display_name',
    ];

    protected static $logAttributes = true;
    protected static $logFillable = true;

    public function getDescriptionForEvent(string $eventName): string
    {
        return "This table has been {$eventName}";
    }
}
