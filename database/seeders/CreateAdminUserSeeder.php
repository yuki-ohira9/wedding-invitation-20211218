<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class CreateAdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        $insertData = [
            'name' => config('user.default_user.name'),
            'email' => config('user.default_user.email'),
            'password' => bcrypt(config('user.default_user.password')),
            'is_admin' => true,
        ];

        User::create($insertData);
    }
}
